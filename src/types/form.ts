export interface FormControlOptions {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  customElement?: "textarea";
  defaultValue?: string;
  required?: boolean;
}

export interface FormBuilderOptions {
  onSumbit: (payload: Record<string, string>) => Promise<void>;
  controls: FormControlOptions[];
  errorElement?: React.ReactNode | string | React.ReactNode[];
}
