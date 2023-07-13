'use client';
import { SessionPrvider } from 'next-auth/react';

const Provider = ({ children, session }) => {
	<SessionPrvider session={session}>{children}</SessionPrvider>;
};

export default Provider;
