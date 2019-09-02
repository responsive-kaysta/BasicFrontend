import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../page/Footer";
import Header from "../page/Header";
import ArticleBanner from "../organism/ArticleBanner";

const PageBanner = React.lazy(() => import("../organism/PageBanner"));

class PageAdminListSources extends React.Component<IViewState, IStoreState> {
  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext, storeContainer: [] };
  }

  public render() {
    return (
      <>
        <React.Suspense key={this.props.viewContext} fallback="Loading">
          <Header />
          <article id="main">
            <ArticleBanner
              header="Admin List Sources"
              paragraph="Example how to style a list Sources Page"
              cssStyle="transparent"
            />
          </article>
          <section id="container" className="container light">
            <div className="page-header">
              <h2>Alle erfassten Archive-Quellen</h2>
            </div>
            
            <div className="flex-column-wraper row">
              <a href="/adminoverviewboxes" className="link-h-padding">
                <i className="fas fa-arrow-circle-left" />
                &nbsp; Back
              </a>
            </div>

           <div>
             <div className="table-wrapper">
             <table>
              <thead>
                <tr><td>&nbsp;</td><td>&nbsp;</td><td>Source Id</td><td>Source Name</td><td>Source IsOnline</td></tr>
                </thead>
              <tbody>
                <tr>
                  <td><a href="/admineditsource"><i className="far fa-check-circle"></i></a></td>
                  <td><a href="#"><i className="fas fa-check-circle"></i></a></td>
                  <td>75</td><td>Tages-Anzeiger Börse</td><td>true</td>
                  </tr>
                  <tr><td><a href="/admineditsource"><i className="far fa-check-circle"></i></a></td>
                  <td><a href="#"><i className="fas fa-check-circle"></i></a></td>
                  <td>74</td><td>Tagesanzeiger - Front</td><td>true</td>
                  </tr>
                <tr><td><a href="#"><i className="far fa-check-circle"></i></a></td><td><a href="#73"><i className="fas fa-check-circle"></i></a></td><td>73</td><td>c't-Themen</td><td>true</td></tr><tr><td><a href="#72"><i className="fas fa-edit"></i></a></td><td><a href="#72"><i className="far fa-edit"></i></a></td><td>72</td><td>NZZ News Panorama</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#71"><i className="far fa-edit"></i></a></td><td>71</td><td>NZZ News Finanzen</td><td>true</td></tr><tr><td><a href="#70"><i className="fas fa-edit"></i></a></td><td><a href="#70"><i className="far fa-edit"></i></a></td><td>70</td><td>NZZ News Wirtschaft</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#69"><i className="far fa-edit"></i></a></td><td>69</td><td>NZZ News Schweiz</td><td>true</td></tr><tr><td><a href="#68"><i className="fas fa-edit"></i></a></td><td><a href="#68"><i className="far fa-edit"></i></a></td><td>68</td><td>NZZ News International</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#67"><i className="far fa-edit"></i></a></td><td>67</td><td>BBC News - Technology</td><td>true</td></tr><tr><td><a href="#66"><i className="fas fa-edit"></i></a></td><td><a href="#66"><i className="far fa-edit"></i></a></td><td>66</td><td>BBC News - Science &amp; Environment</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#65"><i className="far fa-edit"></i></a></td><td>65</td><td>BBC News - Business</td><td>true</td></tr><tr><td><a href="#64"><i className="fas fa-edit"></i></a></td><td><a href="#64"><i className="far fa-edit"></i></a></td><td>64</td><td>BBC News - UK</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#61"><i className="far fa-edit"></i></a></td><td>61</td><td>BBC News - Middle East</td><td>true</td></tr><tr><td><a href="#60"><i className="fas fa-edit"></i></a></td><td><a href="#60"><i className="far fa-edit"></i></a></td><td>60</td><td>BBC News - Asia</td><td>true</td></tr>
                <tr><td><a href="#"><i className="fas fa-edit"></i></a></td><td><a href="#59"><i className="far fa-edit"></i></a></td><td>59</td><td>BBC News - US &amp; Canada</td><td>true</td></tr><tr><td><a href="#58"><i className="fas fa-edit"></i></a></td><td><a href="#58"><i className="far fa-edit"></i></a></td><td>58</td><td>BBC News - Africa</td><td>true</td></tr>
                <tr><td><a href="#57"><i className="fas fa-edit"></i></a></td><td><a href="#57"><i className="far fa-edit"></i></a></td><td>57</td><td>BBC News - Europe</td><td>true</td></tr><tr><td><a href="#56"><i className="fas fa-edit"></i></a></td><td><a href="#56"><i className="far fa-edit"></i></a></td><td>56</td><td>Technology Review</td><td>false</td></tr>
                <tr><td><a href="#55"><i className="fas fa-edit"></i></a></td><td><a href="#55"><i className="far fa-edit"></i></a></td><td>55</td><td>Nachrichten von iX</td><td>false</td></tr><tr><td><a href="#54"><i className="fas fa-edit"></i></a></td><td><a href="#54"><i className="far fa-edit"></i></a></td><td>54</td><td>heise Security</td><td>true</td></tr>
                <tr><td><a href="#53"><i className="fas fa-edit"></i></a></td><td><a href="#53"><i className="far fa-edit"></i></a></td><td>53</td><td>heise open news</td><td>false</td></tr><tr><td><a href="#52"><i className="fas fa-edit"></i></a></td><td><a href="#52"><i className="far fa-edit"></i></a></td><td>52</td><td>heise Netze</td><td>false</td></tr>
                <tr><td><a href="#51"><i className="fas fa-edit"></i></a></td><td><a href="#51"><i className="far fa-edit"></i></a></td><td>51</td><td>heise online News</td><td>false</td></tr><tr><td><a href="#50"><i className="fas fa-edit"></i></a></td><td><a href="#50"><i className="far fa-edit"></i></a></td><td>50</td><td>Computerworld - Whitepapers</td><td>true</td></tr>
                <tr><td><a href="#49"><i className="fas fa-edit"></i></a></td><td><a href="#49"><i className="far fa-edit"></i></a></td><td>49</td><td>Computerworld - Management</td><td>true</td></tr><tr><td><a href="#48"><i className="fas fa-edit"></i></a></td><td><a href="#48"><i className="far fa-edit"></i></a></td><td>48</td><td>Computerworld - Marktanalysen</td><td>true</td></tr>
                <tr><td><a href="#47"><i className="fas fa-edit"></i></a></td><td><a href="#47"><i className="far fa-edit"></i></a></td><td>47</td><td>Computerworld - Businesspraxis</td><td>true</td></tr><tr><td><a href="#46"><i className="fas fa-edit"></i></a></td><td><a href="#46"><i className="far fa-edit"></i></a></td><td>46</td><td>Computerworld Feed</td><td>true</td></tr>
                <tr><td><a href="#45"><i className="fas fa-edit"></i></a></td><td><a href="#45"><i className="far fa-edit"></i></a></td><td>45</td><td>Computerworld - News</td><td>true</td></tr><tr><td><a href="#44"><i className="fas fa-edit"></i></a></td><td><a href="#44"><i className="far fa-edit"></i></a></td><td>44</td><td>ComputerWeekly: All Computer Weekly Content</td><td>true</td></tr>
                <tr><td><a href="#43"><i className="fas fa-edit"></i></a></td><td><a href="#43"><i className="far fa-edit"></i></a></td><td>43</td><td>US News - Financial News Online</td><td>false</td></tr><tr><td><a href="#42"><i className="fas fa-edit"></i></a></td><td><a href="#42"><i className="far fa-edit"></i></a></td><td>42</td><td>Forbes - Security</td><td>true</td></tr>
                <tr><td><a href="#41"><i className="fas fa-edit"></i></a></td><td><a href="#41"><i className="far fa-edit"></i></a></td><td>41</td><td>Forbes - Future Tech</td><td>true</td></tr><tr><td><a href="#40"><i className="fas fa-edit"></i></a></td><td><a href="#40"><i className="far fa-edit"></i></a></td><td>40</td><td>Forbes - Tech</td><td>true</td></tr>
                <tr><td><a href="#39"><i className="fas fa-edit"></i></a></td><td><a href="#39"><i className="far fa-edit"></i></a></td><td>39</td><td>news.ch - Kommunikation</td><td>true</td></tr><tr><td><a href="#38"><i className="fas fa-edit"></i></a></td><td><a href="#38"><i className="far fa-edit"></i></a></td><td>38</td><td>derStandard.at - IT Business</td><td>false</td></tr>
                <tr><td><a href="#37"><i className="fas fa-edit"></i></a></td><td><a href="#37"><i className="far fa-edit"></i></a></td><td>37</td><td>derStandard.at - Games</td><td>false</td></tr><tr><td><a href="#36"><i className="fas fa-edit"></i></a></td><td><a href="#36"><i className="far fa-edit"></i></a></td><td>36</td><td>Pro-Linux News</td><td>false</td></tr>
                <tr><td><a href="#35"><i className="fas fa-edit"></i></a></td><td><a href="#35"><i className="far fa-edit"></i></a></td><td>35</td><td>Tagesanzeiger - Wissen</td><td>true</td></tr><tr><td><a href="#34"><i className="fas fa-edit"></i></a></td><td><a href="#34"><i className="far fa-edit"></i></a></td><td>34</td><td>Heise Newsticker</td><td>true</td></tr>
                <tr><td><a href="#33"><i className="fas fa-edit"></i></a></td><td><a href="#33"><i className="far fa-edit"></i></a></td><td>33</td><td>news.ch - Kultur</td><td>true</td></tr><tr><td><a href="#32"><i className="fas fa-edit"></i></a></td><td><a href="#32"><i className="far fa-edit"></i></a></td><td>32</td><td>Tagesanzeiger - Wirtschaft</td><td>true</td></tr>
                <tr><td><a href="#31"><i className="fas fa-edit"></i></a></td><td><a href="#31"><i className="far fa-edit"></i></a></td><td>31</td><td>tecChannel</td><td>false</td></tr><tr><td><a href="#30"><i className="fas fa-edit"></i></a></td><td><a href="#30"><i className="far fa-edit"></i></a></td><td>30</td><td>Financial Times Deutschland - Lifestyle</td><td>false</td></tr>
                <tr><td><a href="#29"><i className="fas fa-edit"></i></a></td><td><a href="#29"><i className="far fa-edit"></i></a></td><td>29</td><td>news.ch - Wirtschaft</td><td>true</td></tr><tr><td><a href="#28"><i className="fas fa-edit"></i></a></td><td><a href="#28"><i className="far fa-edit"></i></a></td><td>28</td><td>derStandard.at - Telekommunikation</td><td>false</td></tr>
                <tr><td><a href="#27"><i className="fas fa-edit"></i></a></td><td><a href="#27"><i className="far fa-edit"></i></a></td><td>27</td><td>Financial Times Deutschland - Mobile</td><td>false</td></tr><tr><td><a href="#26"><i className="fas fa-edit"></i></a></td><td><a href="#26"><i className="far fa-edit"></i></a></td><td>26</td><td>derStandard.at - Innovation</td><td>false</td></tr>
                <tr><td><a href="#25"><i className="fas fa-edit"></i></a></td><td><a href="#25"><i className="far fa-edit"></i></a></td><td>25</td><td>Financial Times Deutschland - Unternehmen</td><td>false</td></tr>
                <tr><td><a href="#24"><i className="fas fa-edit"></i></a></td><td><a href="#24"><i className="far fa-edit"></i></a></td><td>24</td><td>Computerwoche</td><td>false</td></tr><tr><td><a href="#23"><i className="fas fa-edit"></i></a></td><td><a href="#23"><i className="far fa-edit"></i></a></td><td>23</td><td>news.ch - Ausland</td><td>true</td></tr>
                <tr><td><a href="#22"><i className="fas fa-edit"></i></a></td><td><a href="#22"><i className="far fa-edit"></i></a></td><td>22</td><td>ComputerBase</td><td>false</td></tr><tr><td><a href="#21"><i className="fas fa-edit"></i></a></td><td><a href="#21"><i className="far fa-edit"></i></a></td><td>21</td><td>Financial Times Deutschland - Politik</td><td>false</td></tr>
                <tr><td><a href="#20"><i className="fas fa-edit"></i></a></td><td><a href="#20"><i className="far fa-edit"></i></a></td><td>20</td><td>news.ch - Inland</td><td>true</td></tr><tr><td><a href="#19"><i className="fas fa-edit"></i></a></td><td><a href="#19"><i className="far fa-edit"></i></a></td><td>19</td><td>derStandard.at - Netzpolitik</td><td>false</td></tr>
                <tr><td><a href="#18"><i className="fas fa-edit"></i></a></td><td><a href="#18"><i className="far fa-edit"></i></a></td><td>18</td><td>Financial Times Deutschland - Medien/Internet</td><td>false</td></tr><tr><td><a href="#17"><i className="fas fa-edit"></i></a></td><td><a href="#17"><i className="far fa-edit"></i></a></td><td>17</td><td>news.ch - Wissen</td><td>true</td></tr>
                <tr><td><a href="#16"><i className="fas fa-edit"></i></a></td><td><a href="#16"><i className="far fa-edit"></i></a></td><td>16</td><td>news.ch - Boulevard</td><td>true</td></tr><tr><td><a href="#15"><i className="fas fa-edit"></i></a></td><td><a href="#15"><i className="far fa-edit"></i></a></td><td>15</td><td>WinFuture</td><td>false</td></tr>
                <tr><td><a href="#14"><i className="fas fa-edit"></i></a></td><td><a href="#14"><i className="far fa-edit"></i></a></td><td>14</td><td>Golem.de</td><td>true</td></tr>
                </tbody>
                </table>
             </div>
           
           </div>
          </section>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminListSources;
