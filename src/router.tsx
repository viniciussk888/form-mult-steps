import { BrowserRouter, Route } from "react-router-dom";

//pages
import { FormStep1 } from "./pages/formStep1";
import { FormStep2 } from "./pages/formStep2";
import { FormStep3 } from "./pages/formStep3";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStep1} />
      <Route path="/step2" component={FormStep2} />
      <Route path="/step3" component={FormStep3} />
    </BrowserRouter>
  );
};
