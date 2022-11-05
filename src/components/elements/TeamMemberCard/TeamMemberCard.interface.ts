export interface iTeamMemberCardState {
    showDesc: boolean,
    socials: {
        social: string,
        icon: string
    }[]
}

export interface iFindIcon {
    (state: iTeamMemberCardState, social: string): string | undefined
}
