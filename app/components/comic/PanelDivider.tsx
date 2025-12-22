export function PanelDivider({ text, dark }: { text: string, dark?: boolean }) {
  return (
    <div className={`panel-divider manga-gutter ${dark ? 'dark' : ''}`}>
      <span className="gutter-text">{text}</span>
    </div>
  );
}