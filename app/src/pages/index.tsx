export default function Index() {
  return (
    <div
      data-testid="divIndex"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <textarea placeholder="This should never show" hidden />

      {/* THIS IS LEFT INTENTIONALLY BLANK TO MINIMIZE LOAD */}
    </div>
  );
}
