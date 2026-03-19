export default function Divider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '10px 0',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#646cff', opacity: 0.4, display: 'inline-block' }} />
      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#646cff', opacity: 0.8, display: 'inline-block' }} />
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#646cff', opacity: 0.4, display: 'inline-block' }} />
    </div>
  );
}
