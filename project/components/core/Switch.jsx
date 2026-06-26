import React from 'react';

/** Toggle switch — brand green when on. */
export function Switch({ checked = false, onChange, label, disabled = false, id, style }) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return (
    <label htmlFor={inputId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-body)', ...style,
    }}>
      <span style={{ position: 'relative', width: 40, height: 24, flex: 'none' }}>
        <input
          id={inputId} type="checkbox" role="switch" checked={checked} disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked, e)}
          style={{ position: 'absolute', opacity: 0, width: 40, height: 24, margin: 0, cursor: 'inherit' }}
        />
        <span style={{
          position: 'absolute', inset: 0, borderRadius: 999,
          background: checked ? 'var(--green-600)' : 'var(--sand-300)',
          transition: 'background var(--dur-base) var(--ease-out)',
        }} />
        <span style={{
          position: 'absolute', top: 3, left: checked ? 19 : 3, width: 18, height: 18,
          borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
