import { HomeComponent } from "@/components/home.component";
import React from "react";

import * as classes from "./style/style.page";

export const HomeScene: React.FC = () => {
  return (
    <section className={classes.main}>
      <HomeComponent />;
    </section>
  );
};
