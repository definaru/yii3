interface SocialLink {
    icon: SocialLinkIcon
    link: string
    ariaLabel?: string
  }
  
  type SocialLinkIcon =
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'mastodon'
    | 'npm'
    | 'slack'
    | 'twitter'
    | 'x'
    | 'youtube'
    | { svg: string }

export function SocialLinks(): SocialLink[]
{
    return [
        { icon: 'github', link: 'https://github.com/yiisoft/app' },
        { icon: 'facebook', link: 'https://www.facebook.com/groups/yiitalk/' },
        { icon: 'x', link: 'https://twitter.com/yiiframework' },
        { icon: 'slack', link: 'https://yii.slack.com' }
    ]
}