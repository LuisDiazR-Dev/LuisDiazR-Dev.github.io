export interface SocialMedia {
	linkedInURL: string
	githubURL: string
	portfolioURL: string
}

export interface Skills {
	frontEnd: string[]
	cssFrameworks: string[]
	backEnd: string[]
	versionControl: string[]
	agileMethodologies: string[]
	deployment: string[]
	other: string[]
}

export interface Experience {
	title: string
	company: string
	companyURL: string
	startDate: string
	endDate: string
	description: string[]
	toolsAndTechnologies: string[]
}

export interface Project {
	name: string
	type: string
	description: string[]
	features: string[]
	toolsAndTechnologies: string[]
}

export interface Education {
	title: string
	institution: string
	duration: string
}

export interface ComplementaryEducation {
	title: string
	institution: string
	year: string
	additionalInfo?: string
}

export interface AboutMeCv {
	userName: string
	alias: string
	role: string
	location: string
	phone: string
	email: string
	socialMedia: SocialMedia
	aboutMe: string[]
	skills: Skills
	experience: Experience[]
	projects: Project[]
	education: Education[]
	complementaryEducation: ComplementaryEducation[]
	languages: string[]
}
