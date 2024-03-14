'use client';

import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  const createProfile = useMutation(api.profiles.createProfile);
  const profiles = useQuery(api.profiles.getProfile);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Social Planner</h1>
        <p className="text-2xl text-primary">
          Your personalize social media assistant
        </p>
      </section>

      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <Button
        onClick={() => {
          createProfile({
            businessName: 'Hello World',
            industry: 'Jewelleries',
          });
        }}
      >
        Click me
      </Button>

      {profiles?.map((profile) => {
        return <div key={profile._id}>{profile.businessName}</div>;
      })}
    </main>
  );
}
