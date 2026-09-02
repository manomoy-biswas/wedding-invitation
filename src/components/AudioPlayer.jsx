import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { C, AUDIO_SRC } from "./common/theme";

/* Only the opening LOOP_SECONDS of the track are used, looped indefinitely.
   Consecutive iterations overlap by CROSSFADE_SECONDS with an equal-length
   fade-out/fade-in so the restart is masked rather than an audible jump cut. */
const LOOP_SECONDS = 31;
const CROSSFADE_SECONDS = 2.5;
const TARGET_VOLUME = 0.5;

function scheduleLoopIteration(ctx, masterGain, buffer, startAt, timeoutRef, isFirst) {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const gainNode = ctx.createGain();
  source.connect(gainNode);
  gainNode.connect(masterGain);

  const fadeStart = startAt + LOOP_SECONDS - CROSSFADE_SECONDS;
  const loopEnd = startAt + LOOP_SECONDS;

  if (isFirst) {
    gainNode.gain.setValueAtTime(1, startAt);
  } else {
    gainNode.gain.setValueAtTime(0, startAt);
    gainNode.gain.linearRampToValueAtTime(1, startAt + CROSSFADE_SECONDS);
  }
  gainNode.gain.setValueAtTime(1, fadeStart);
  gainNode.gain.linearRampToValueAtTime(0, loopEnd);

  source.start(startAt, 0, LOOP_SECONDS);

  const msUntilNextSchedule = Math.max(0, (fadeStart - ctx.currentTime) * 1000);
  timeoutRef.current = setTimeout(() => {
    scheduleLoopIteration(ctx, masterGain, buffer, fadeStart, timeoutRef, false);
  }, msUntilNextSchedule);
}

/* ---------- Background music: plays once the envelope opens, mute toggle while open ---------- */
export default function AudioPlayer({ phase }) {
  const [muted, setMuted] = useState(false);
  const ctxRef = useRef(null);
  const masterGainRef = useRef(null);
  const startedRef = useRef(false);
  const nextTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (nextTimeoutRef.current) clearTimeout(nextTimeoutRef.current);
      ctxRef.current?.close();
    };
  }, []);

  useEffect(() => {
    if (phase !== "opening" || startedRef.current || !AUDIO_SRC) return;
    startedRef.current = true;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    ctxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = TARGET_VOLUME;
    masterGain.connect(ctx.destination);
    masterGainRef.current = masterGain;

    fetch(AUDIO_SRC)
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then((buffer) => {
        if (ctx.state === "suspended") ctx.resume();
        scheduleLoopIteration(ctx, masterGain, buffer, ctx.currentTime, nextTimeoutRef, true);
      })
      .catch(() => {});
  }, [phase]);

  if (!AUDIO_SRC) return null;

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    const ctx = ctxRef.current;
    if (ctx && masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(next ? 0 : TARGET_VOLUME, ctx.currentTime, 0.05);
    }
  };

  return (
    phase === "open" && (
      <button onClick={toggleMute} className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: C.maroonDeep, border: `1px solid ${C.gold}` }}>
        {muted ? <VolumeX size={18} color={C.gold} /> : <Volume2 size={18} color={C.gold} />}
      </button>
    )
  );
}
