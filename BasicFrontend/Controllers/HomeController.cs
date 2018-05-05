//
// HomeController.cs
//
// Author: Kay Stuckenschmidt
//
// Copyright (c) 2017 responsive kaysta
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

using BasicFrontend.Application;
using System.Web.Mvc;

namespace BasicFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static readonly AppBase AppBase = AppBase.Instance;

        public ActionResult Index()
        {
            ViewBag.BodyClass = "landing";
            ViewBag.HeaderClass = "alt";

            return View();
        }

        public ActionResult Disclaimer()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.BodyClass = "landing";
            ViewBag.HeaderClass = "alt";

            return View();
        }

        public ActionResult Me()
        {
            ViewBag.BodyClass = "landing";
            ViewBag.HeaderClass = "alt";

            return View();
        }

        public ActionResult Laws()
        {
            return View();
        }

        public ActionResult MasterArchive()
        {
            return View();
        }
    }
}