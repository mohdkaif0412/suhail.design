import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Mohd Suhail — UI/UX & Product Designer';
  const subtitle = searchParams.get('subtitle') ?? 'suhail.design';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
          }}
        />

        {/* Role badge */}
        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px',
            padding: '8px 24px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#a3a3a3', fontSize: '18px', letterSpacing: '0.05em' }}>
            UI/UX Designer &amp; Product Designer
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? 48 : 64,
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 24,
            color: '#60a5fa',
            letterSpacing: '0.05em',
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
