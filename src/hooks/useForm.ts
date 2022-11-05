import { useCallback, useState } from "react";

export function useForm() {
  const [payload, setPayload] = useState<Record<string, string>>({});
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
