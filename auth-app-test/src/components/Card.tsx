"use client";
import { useSession } from "next-auth/react";
import { json } from "stream/consumers";

export default function Card() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
    {session && <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '24px',
      maxWidth: '400px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {/* Image Side */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={user?.image || 'https://via.placeholder.com/96'}
          alt={user?.name || 'Guest'}
          style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      {/* Details Side */}
      <div style={{ flex: 2, marginLeft: '24px' }}>
        <h2 style={{ margin: 0 }}>{user?.name || 'Guest'}</h2>
        <p style={{ margin: '8px 0 0 0', color: '#6b7280' }}>{user?.email || 'Not signed in'}</p>
      </div>
    </div>}
    {!session && <div>
      <h1>Please sign in to continue</h1>
    </div>}
    </>
  );
}