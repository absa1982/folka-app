import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional text label rendered to the right. */
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Checkbox with brand-green checked state and optional inline label. */
export function Checkbox({ checked = false, onChange, label, disabled = false, id, style }: CheckboxProps) {
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
          id={inputId} type="checkbox" checked={checked} disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked, e)}
          style={{ position: 'absolute', opacity: 0, width: 20, height: 20, margin: 0, cursor: 'inherit' }}
        />
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 20, height: 20, borderRadius: 6,
          background: checked ? 'var(--green-600)' : 'var(--surface-card)',
          border: `1.5px solid ${checked ? 'var(--green-600)' : 'var(--border-strong)'}`,
          transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        }}>
          {checked && (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          )}
        </span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
