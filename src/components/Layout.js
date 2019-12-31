import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta name="description" content="This website is part of a co-ordinated response by concerned local residents following an attempt to build 1,800 houses on the most productive/highest graded farmland in the Ashfield area."/>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta name="google" content="notranslate" />
                    <link rel="icon" href="/images/favicon.png" type="image/x-icon"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'post') &&  
                    _.get(this.props, 'pageContext.frontmatter.canonical_url') && 
                    <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')}/>
                    }
                </Helmet>
                  <div id="page" className={'site layout-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_style') + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                    <Header {...this.props} />
                    <div id="content" className="site-content">
                      <main id="main" className="site-main inner">
                        {this.props.children}
                      </main>
                    </div>
                    {_.get(this.props, 'pageContext.site.data.subscribe.enabled') && 
                      <Subscribe {...this.props} />
                    }
                    <Footer {...this.props} />
                  </div>
            </React.Fragment>
        );
    }
}
