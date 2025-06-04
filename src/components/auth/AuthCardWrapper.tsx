import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  // TODO: Implement social logins if needed
  // showSocial?: boolean;
}

const AuthCardWrapper: React.FC<AuthCardWrapperProps> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  // showSocial,
}) => {
  console.log("Rendering AuthCardWrapper with header:", headerLabel);
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">{headerLabel}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {/* TODO: Implement social login buttons here if showSocial is true */}
      {/* {showSocial && (
        <CardFooter>
          <div className="w-full">
            Social Logins Placeholder
          </div>
        </CardFooter>
      )} */}
      <CardFooter className="flex flex-col items-center">
        <Button variant="link" className="font-normal w-full" asChild>
          <Link to={backButtonHref}>
            {backButtonLabel}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthCardWrapper;