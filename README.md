## Calender

[react query](https://react-query.tanstack.com/)

[react router dom v6](https://github.com/remix-run/react-router)

[react-datepicker](https://reactdatepicker.com/)

[react-day-picker](https://react-day-picker.js.org/)

//

[moment.js](https://momentjs.com/docs/)




### react-router-dom v6
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
