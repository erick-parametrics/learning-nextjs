/**
 * This is a dynamic page. 
 * [] in the file name signifies that this is a dynamic page.
 * Can add any value inside the [] and this will be loaded on the page.
 * Any value after news/ will be rendered in the browser.
 * This is a feature of nextjs to build truly dynamic web page.
 */

/**
 * To extract the concrete value in URL when dynamic page is loaded -
 * special hook needs to be used - import useRouter from next/router - 
 * then call this hook in the function and will have access to -
 * router object with different data and methods and more importantly -
 * the specific value of each dynamic pops segments.
 */

import {useRouter} from 'next/router';

function NewsSectionPage () {

    const router = useRouter();

    // Access the concrete value of each dynamic page.
    router.query.NewsSection;
    // console.log(router.query.newsSection);

    return <h1>The News Section Page</h1>
}

export default NewsSectionPage;