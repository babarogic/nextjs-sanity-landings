export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60bd0def1767517f28fd6649',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-landings-studio',
                  apiId: '9337f2f5-4d82-41a1-8045-ba7a8a79beb4'
                },
                {
                  buildHookId: '60bd0def6deb95e37a6ad501',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-landings',
                  apiId: '33cb1965-7238-4895-bfca-4b964d74b5eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/babarogic/nextjs-sanity-landings',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-sanity-landings.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
