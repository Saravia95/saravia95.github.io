import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UnityWebGLBuild from "../UnityWebGLBuild";
export function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <UnityWebGLBuild />
      </div>
    </>
  );
}
