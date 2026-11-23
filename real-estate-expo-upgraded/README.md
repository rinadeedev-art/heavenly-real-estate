# Havenly Real Estate — Expo Starter v2

A React Native + Expo Router real-estate app for iOS, Android, and web.

## What's included
- Modern home screen with Buy/Rent choice, property-type filters, and search
- Explore screen with filters and property listings
- Property details, amenities, and inspection-request entry point
- Persistent local saved/favourite properties using AsyncStorage
- Messages screen starter
- Property listing submission form with validation
- Inspection request form with validation
- Agent dashboard starter
- Login/register interface starter
- Nigerian sample property prices and Lagos/Abuja sample locations
- StyleSheet-based styling (no NativeWind dependency in this starter)

## Run locally
1. Extract the ZIP.
2. Open the `real-estate-expo` folder in VS Code.
3. Run `npm install`.
4. Run `npx expo start`.
5. Press `w` for web or scan the QR code with Expo Go.

If Expo dependency versions are reported as mismatched, run:
`npx expo install --fix`

## About the demo forms
The login/register, listing submission, messages, agent dashboard, and inspection booking are front-end starter interfaces. They validate inputs and demonstrate the user flow, but they do not create real accounts, publish listings to a server, deliver messages, or book confirmed inspections. Favorites are saved locally on the current device.

## Optional backend integration (recommended before launch)
Suggested backend: Supabase (Auth + PostgreSQL + Storage + Realtime).
1. Create a Supabase project.
2. Add `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` to a `.env` file.
3. Install the Supabase JS client with `npx expo install @supabase/supabase-js`.
4. Create database tables for profiles, properties, favourites, messages, and inspections.
5. Enable Row Level Security and write policies before exposing user data.
6. Connect listing photos to Storage and review listings before publishing.
7. Add real auth and database integration before production use.

Never place service-role keys, payment secrets, or other private credentials in the mobile app.

## Fixing the `react-native-css-interop` dark-mode error
This starter uses React Native `StyleSheet` and does not configure NativeWind. If the error persists after replacing your project with this ZIP, check for an old `global.css` import, NativeWind setup, or `Appearance.setColorScheme` / `colorScheme.set` code carried over from your previous project. Stop Expo and restart with:
`npx expo start --clear`
If you intentionally use NativeWind v5 in your own branch, follow its version-specific dark-mode setup rather than mixing v4 and v5 CSS configuration.
