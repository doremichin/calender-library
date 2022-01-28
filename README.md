## Calender

- react-datepicker



- react router dom v6

기존의 Switch, exact 등 사라짐


```javascript
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Page1, Page2, NotFound } from "../pages";
import { Header } from ".";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          // Routes 안에는 Route만 쓸 수 있다.
          // exact 대신 여라 라우팅을 매칭하고 싶다면 URL 뒤에 *을 붙인다.
        <Route path="/" element={<Main />} />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```
