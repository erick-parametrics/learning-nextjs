/**
 * Single Page Application (SPA)
 * Constructing a link in regular page and leverage the SPA.
 * Fragment will be used to wrap around more that one tag 
 * in the return statement - this is same with React.
 * The difference is <></> - this React Fragment
 * <Fragment></Fragment> - this is NextJS and this needs
 * to be imported (not in React).
 * Interactive UI in SPA.
 */

import Link from 'next/link'; // Responsible for SPA link for each
import {Fragment} from 'react';

function NewsPage () {
    return (
    <Fragment>
     <h1>The News Page</h1>
    <ul>
        <li>
            <Link href='/news/news1'>
                News 1!
            </Link>
        </li>

        <li>
            <Link href='/news/news2'>
                News 2!
            </Link>
        </li>
    </ul>
    </Fragment>
    )
}

export default NewsPage;