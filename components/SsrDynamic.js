import dynamic from 'next/dynamic'

 const SsrDynamic = dynamic(() => import('./SearchBar'),
    { ssr: false }
)

export default SsrDynamic