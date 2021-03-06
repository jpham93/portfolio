/**
 * MHNLanding content
 *
 * This content contains the first project created with Wordpress
 * which was released into production with Amazon Lightsail platform.
 */
export default {
  title: 'Magic Hair & Nails Landing Page',
  description:
    `
      I always wanted to help my mother with her business, but I never had any applicable trade skills until now. Her 
      the website has been down for many years, and now I thought it was an excellent time to give her business more 
      exposure. Wordpress was brand new to me during the making of this website. I picked up certain concepts from VTA 
      team's Technology Learning Series and played around with test servers by creating custom plugins and child themes 
      until I was ready to create the website. I created an AWS Lightsail instance with the Wordpress package. The 
      design customized with a  child theme (through some PHP Wordpress configuration), which I styled with custom CSS. 
      The site's domain name was obtained through AWS Route 53 for easier integration, while the SSL certification was 
      obtained through Certbot on the Apache server.
  `,
  stackList:
    ['wordpress', 'php', 'mysql', 'linux', 'aws', 'css', 'bitnami'],
  links:
    [
      {
        content: 'Website',
        icon: 'laptop',
        url: 'https://magichairandnails.com',
        color: 'blue'
      },
    ]
};