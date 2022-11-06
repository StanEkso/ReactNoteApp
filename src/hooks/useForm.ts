import { useCallback, useState } from "react";

export function useForm(defaultValue: Record<string, string> = {}) {
  const [payload, setPayload] = useState<Record<string, string>>(defaultValue);
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setPayload]
  );
  const setError = (message: string) =>
    setPayload((prev) => ({ ...prev, error: message }));
  return {
    payload,
    changeHandler,
    setError,
  };
}
