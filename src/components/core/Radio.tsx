import * as React from 'react';

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Radio button with brand-green selected state. Group by shared `name`. */
export function Radio({ checked = false, onChange, label, name, value, disabled = false, id, style }: RadioProps) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return (
    <label htmlFor={inputId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-body)', ...style,
    }}>
      <span style={{ position: 'relative', width: 20, height: 20, flex: 'none' }}>
        <input
          id={inputId} type="radio" name={name} value={value} checked={checked} disabled={disabled}
          onChange={(e) => onChange && onChange(value, e)}
          style={{ position: 'absolute', opacity: 0, width: 20, height: 20, margin: 0, cursor: 'inherit' }}
        />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 20, height: 20, borderRadius: '50%',
          background: 'var(--surface-card)',
          border: `1.5px solid ${checked ? 'var(--green-600)' : 'var(--border-strong)'}`,
          transition: 'border-color var(--dur-fast)',
        }}>
          {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green-600)' }} />}
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
