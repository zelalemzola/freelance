"use client";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ReactNode } from "react";
import Loading from "@/components/auth/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider publishableKey='pk_test_cXVhbGl0eS1idWxsLTI1LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    <Unauthenticated>
        {children}
      </Unauthenticated>
      <Authenticated>
          {children}
        
      </Authenticated>
      <AuthLoading>
        <Loading/>
      </AuthLoading>
    
      </ConvexProviderWithClerk>
    
    </ClerkProvider>;
}
