import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "trench.waitlist.handle";
const HANDLE_RE = /^[A-Za-z0-9_]{1,15}$/;

export function Waitlist() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [joinedAs, setJoinedAs] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && HANDLE_RE.test(saved)) {
        setJoinedAs(saved);
        setStatus("ok");
      }
    } catch {
      /* private mode */
    }
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const handle = value.trim().replace(/^@/, "");
    if (!HANDLE_RE.test(handle)) {
      setStatus("err");
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, handle);
    } catch {
      /* ignore quota */
    }
    setJoinedAs(handle);
    setStatus("ok");
  }

  if (status === "ok" && joinedAs) {
    return (
      <p className="h-11 text-sm leading-11 tracking-wide text-muted">
        @{joinedAs} · you're in the trench
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-64 flex-col items-center"
    >
      <div className="flex w-full items-center gap-2 border-b border-border focus-within:border-accent/45">
        <span className="pl-0.5 text-sm text-muted" aria-hidden="true">
          @
        </span>
        <label className="sr-only" htmlFor="x-handle">
          X handle
        </label>
        <Input
          id="x-handle"
          name="handle"
          autoComplete="username"
          spellCheck={false}
          maxLength={16}
          placeholder="handle"
          value={value}
          aria-invalid={status === "err"}
          onChange={(e) => {
            setValue(e.target.value);
            if (status === "err") setStatus("idle");
          }}
          className="h-11 border-0 px-0 text-sm tracking-wide"
        />
        <Button type="submit" variant="quiet" size="sm" className="shrink-0 px-1">
          notify
        </Button>
      </div>
      <p
        className={`mt-1.5 h-4 text-2xs tracking-wide ${
          status === "err" ? "text-muted" : "text-transparent"
        }`}
      >
        use a real handle
      </p>
    </form>
  );
}
