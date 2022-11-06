export interface FormControlOptions {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  customElement?: "textarea";
  defaultValue?: string;
}

export interface FormBuilderOptions {
  onSumbit: (payload: Record<string, string>) => void;
  controls: FormControlOptions[];
  errorElement?: React.ReactNode | string | React.ReactNode[];
}
