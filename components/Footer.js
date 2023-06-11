
export {Footer};

function Footer () {
    return (
        <>
            {/* Needs to be centered on the page */}
            <footer className="footer">
                <div className="container">
                    <p  className="text-center"><a href="http://www.nsm.uh.edu/" target="_blank">UH College of Natural Sciences &amp; Mathematics</a></p>	</div>
            </footer>

            <footer className="uh-footer">
                <system-region name="DEFAULT"><nav aria-label="Global Footer" className="global-footer">
                    <div className="container">
                        {/* Needs to be centered on the page */}
                        <p className="copyright text-center ">©2023 University of Houston. All rights reserved.</p>
                            <ul className="nav-required flex justify-center ">
                            {/* 3 rows by cols  centered on page */}
                                <li className="nav-item-highlighted"><a href="https://uh.edu/web-update/report-a-problem/" target="_blank">Report a problem with this page</a></li>
                                <li><a href="https://www.texas.gov/" rel="noopener" target="_blank">Texas.gov</a></li>
                                <li><a href="https://gov.texas.gov/organization/hsgd" rel="noopener" target="_blank">Texas Homeland Security</a></li>
                                <li><a href="https://www.tsl.texas.gov/trail/index.html" rel="noopener" target="_blank">TRAIL</a></li>
                                <li><a href="https://sao.fraud.texas.gov/ReportFraud/" rel="noopener" target="_blank">Fraud Reporting</a></li>
                                <li><a href="https://www.uhsystem.edu/fraud-non-compliance/" rel="noopener" target="_blank">Fraud &amp; Non-Compliance Hotline</a></li>
                                <li><a href="https://www.sos.state.tx.us/linkpolicy.shtml" rel="noopener" target="_blank">Linking Notice</a></li>
                                <li><a href="http://uhsystem.edu/privacy-notice/" rel="noopener" target="_blank">Privacy Notice</a></li>
                                <li><a href="https://uhsystem.edu/legal-affairs/general-counsel/public-information-act/" rel="noopener" target="_blank">Open Records/Public Information Act</a></li>
                                <li><a href="https://apps.highered.texas.gov/resumes/" target="_blank">Institutional Résumé</a></li>
                                <li><a href="http://www.uh.edu/finance/pages/State_Report.htm" target="_blank">Required Reports</a></li>
                                <li><a href="https://www.uh.edu/equal-opportunity/eir-accessibility/" target="_blank">Electronic &amp; Information Resources Accessibility</a></li>
                                <li><a href="https://www.uh.edu/sexual-misconduct-reporting-form/" target="_blank">Discrimination and Sexual Misconduct Reporting and Awareness</a></li>
                                <li><a href="https://www.uh.edu/policies/" target="_blank">University Policies</a></li>
                            </ul>
                    </div>
                </nav>
                <script type="text/javascript" async="" src="https://www.google-analytics.com/gtm/js?id=GTM-MDRT3QB&amp;t=mainTracker&amp;cid=1435324053.1658845781"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/linkid.js"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://www.uh.edu/scripts/ga.js?v=20220707" type="text/javascript"></script></system-region>
            </footer>
        </>
    )
    
}

