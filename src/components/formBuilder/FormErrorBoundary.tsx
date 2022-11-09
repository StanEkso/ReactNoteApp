import React, { FC, PropsWithChildren, useCallback } from "react";

interface Props {
  onSubmit: () => void;
  error?: string;
}

const FormErrorBoundary: FC<Props & PropsWithChildren> = ({
  onSubmit,
  error,
  children,
}) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  return (
    <form className="grid gap-1 mx-4" onSubmit={handleSubmit}>
      {!!error && (
        <div className="border-2 border-red-600 py-1 px-2">{error}</div>
      )}
      {children}
    </form>
  );
};

export default FormErrorBoundary;
