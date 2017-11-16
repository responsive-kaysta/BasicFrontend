//
// HomeController.cs
//
// Author: Kay Stuckenschmidt <mailto.kaysta@gmail.com>
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

using System;

namespace BasicFrontend.Application
{
    public sealed class AppBase
    {
        /// <summary>
        /// The instance.
        /// </summary>
        private static volatile AppBase instance;

        /// <summary>
        /// The sync root.
        /// </summary>
        private static object syncRoot = new Object();

        /// <summary>
        /// Gets the instance.
        /// </summary>
        /// <value>The instance.</value>
        public static AppBase Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (syncRoot)
                    {
                        if (instance == null)
                        {
                            instance = new AppBase();
                        }
                    }
                }
                return instance;
            }
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="T:MasterArchive.DataBaseClient.ApplicationBase"/> class.
        /// </summary>
        private AppBase() {}

        public string linkHome = "/";
        public string linkIndex = "/Home/Index";

        public string linkAbout = "/Home/About";
        public string linkAboutMe = "/Home/Me";
        public string linkAboutLaws = "/Home/Laws";

        public string linkDisclaimer = "/Home/Disclaimer";

        public string linkBlog = "/Blog/Index";
        public string linkBlog1 = "/Blog/Blog1";
        public string linkBlog2 = "/Blog/Blog2";
        public string linkBlog3 = "/Blog/Blog3";

       
    }
}