import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { FallingLines } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <Container>
      <Suspense
        fallback={
          <FallingLines
            color="#0824AF"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
