// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-09'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }



export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-09'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    // During build, we log the error instead of throwing it.
    // This stops Vercel from crashing on the "/_not-found" page.
    if (process.env.NODE_ENV === 'production') {
      console.warn(`⚠️ Build Warning: ${errorMessage}`);
      return 'placeholder' as any; 
    }
    throw new Error(errorMessage);
  }

  return v;
}