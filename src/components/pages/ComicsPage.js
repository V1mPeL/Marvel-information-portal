import AppBanner from '../appBanner/AppBanner'
import ComicsList from '../comicsList/ComicsList'
import { Helmet } from 'react-helmet'

const ComicsPage = () => {

  return (
    <>
        <Helmet>
            <meta
                name="description"
                content="Comics list"
            />
            <title>Comics page</title> 
        </Helmet>
        <AppBanner />
        <ComicsList />
    </>
  )

}

export default ComicsPage;