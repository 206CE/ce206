/** GOOD - 1.0.0

1.  Add hover state change
 



 */

export default function CopyRight() {
  return (
    <footer className='p-6 border-t border-(--border) '>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text'>
          &copy; 2026 206CE{' '}
        </p>
        <span className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text mx-2'>
          |
        </span>

        <p className='text-(--text-secondary) text-xs tracking-widest uppercase glow-text'>
          Operational Protocol v1.0
        </p>
        <p className='distort-hover text-[10px] text-(--text-tertiary)] cursor-default text-center'>
          Unauthorized duplication is a violation of system integrity.
        </p>
      </div>
    </footer>
  );
}
