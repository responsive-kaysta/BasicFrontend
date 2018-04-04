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

namespace BasicFrontend.Application
{
    public sealed class AppBase
    {
        /// <summary>
        ///     The instance.
        /// </summary>
        private static volatile AppBase _instance;

        /// <summary>
        ///     The sync root.
        /// </summary>
        private static readonly object SyncRoot = new object();

        public string LinkAbout = "/Home/About";
        public string LinkAboutLaws = "/Home/Laws";
        public string LinkAboutMe = "/Home/Me";

        public string LinkBlog = "/Blog/Index";
        public string LinkBlog1 = "/Blog/Blog1";
        public string LinkBlog2 = "/Blog/Blog2";
        public string LinkBlog3 = "/Blog/Blog3";
        public string LinkBlog4 = "/Blog/Blog4";
        public string LinkBlog5 = "/Blog/Blog5";
        public string LinkBlog6 = "/Blog/Blog6";
        public string LinkBlog7 = "/Blog/Blog7";

        public string LinkDisclaimer = "/Home/Disclaimer";

        public string LinkHome = "/";
        public string LinkIndex = "/Home/Index";

        public string LinkMasterArchive = "/Home/MasterArchive";

        /// <summary>
        ///     Initializes a new instance of the <see cref="T:MasterArchive.DataBaseClient.ApplicationBase" /> class.
        /// </summary>
        private AppBase()
        {
        }

        /// <summary>
        ///     Gets the instance.
        /// </summary>
        /// <value>The instance.</value>
        public static AppBase Instance
        {
            get
            {
                if (_instance != null) return _instance;
                lock (SyncRoot)
                {
                    if (_instance == null) _instance = new AppBase();
                }

                return _instance;
            }
        }
    }
}