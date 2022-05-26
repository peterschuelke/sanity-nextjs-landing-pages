export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628fb88b8c595a307dd9a5f5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9cjmkkdn',
                  apiId: '9e72ec1e-35bb-4afe-b0e7-d6c4125f78e7'
                },
                {
                  buildHookId: '628fb88bb0e5c5006f03ae07',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6kjtx5qi',
                  apiId: 'dd164e3a-9918-4e99-90fc-50eec59673a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterschuelke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6kjtx5qi.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
