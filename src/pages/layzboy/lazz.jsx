import React, { lazy, Suspense } from "react";

// ✅ Lazy Load the Component
const MyComponent = lazy(() => import("../lazychild/lazzchild"));

const lazz = () => {
  return (
    <div>
      <h1>Lazy Loading in React</h1>

      {/* ✅ Suspense shows fallback while MyComponent loads */}
      <Suspense fallback={<p>Loading Component...</p>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default lazz;
