export type PageNuxtChapterCodeType = {
  fileName: string,
  code: string,
}

export type PageNuxtChapterType = {
  title: string,
  texts?: string[],
  codes?: [PageNuxtChapterCodeType] | [PageNuxtChapterCodeType, PageNuxtChapterCodeType]
}

export type PageNuxtType = {
  title: string,
  intro: string,
  chapters: PageNuxtChapterType[],
}
