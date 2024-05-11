# MoonShop
simple shopping list application made using React and Typescript
##  [link to application hosted on gh-pages]( https://kodehodekatty.github.io/MoonShop/)
![moonshop](https://github.com/Kodehodekatty/MoonShop/assets/112854862/2c424395-263f-4566-ae04-6447a4939e3d)


## Install & Run

Clone and Run the application:

1. Clone the repo
2. Navigate to project folder: `MoonShop`
3. Install modules: `npm i`
4. Run the app: `npm run dev`

## Libraries
- [react-hook-form](https://react-hook-form.com/)
  -  a better form management library
  -  used for the build-in hooks and validation
  - works well with Typescript, typing of the form values 
  -  integration with zod validation, in `/useShopForm.ts` Zod is connected to  **react-hook-form** with using the **hookform-resolvers**
    
```
const formMethods = useForm({
 defaultValues,
 resolver: zodResolver(ItemSchema),
 });
```
  
- [zod](https://zod.dev/)
  -   combined with **react-hook-form**
  -   it makes it more efficient/easier to validate data and types
  -  used to make an ItemSchema containing the types and validation requirements in `/itemValidator.ts`, 
  
- [uuid](https://www.uuidgenerator.net/)
  -  used to generate and assign random ID's to data
  -  used in `/useShopForm.ts` in order to generate Id for the default values
  -  and in the Item type zod validation file  `/itemValidator`
    
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
  -  icon package
  -  delete icon used in `/ItemRow` and  `/ItemTable`
- [@uidotdev/usehooks](https://www.npmjs.com/package/@uidotdev/usehooks)
   -  used for the local storage hook
   -  used to prevent losing data on refresh, for styling of the table
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
   -  used to connect zod to react-hook-form
- [@hookform/error-message](https://www.npmjs.com/package/@hookform/error-message)
   -  used to display error messages if validation does not go through.
- [gh-pages](https://www.npmjs.com/package/gh-pages)
  - used to host the page live at [MoonShop]( https://kodehodekatty.github.io/MoonShop/)

## Hooks and contexts
- `/useShopForm.ts`
    - not technically necessary, but wanted to display the ability to create custom hooks with other libraries. 
-  `/useShop.ts`
   - holds the `cart` and `items` states
   -  and all the different add/remove/clear functions
   -  passes the states and functions to the ShopContext
   -  made outside of the shopContext provider, in case I had to access the data outside of the provider.
-   `/useFormContext` from react-hook-form
    - hook that gives access to the form context
    -  used to register input data in `/ItemForm.tsx`, and the children components.
    - connects to the useShopForm by passing an `addnewitem` function to the onSubmit handler in `/useShopForm.ts`
 
- `/ShopContext.ts`
   - used for the `cart` and `items` and function types, and hook to handle data.
   - used as a Provider and wraps`/App.tsx`


## Reusable components and reusable variables
-  made `/TextField.tsx` into a reusable component
-  demonstrating how to make two similar components into one reusable component with props
-  added variables in `App.css` file, for color styling management. 


## Development tools

-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)
    -  [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
    -   [typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   [Vite](https://vitejs.dev/)


## CSS and styling
 - used normal CSS instead of the requested SCSS. Before, only SCSS could make variables for styling, however, this functionality has been integrated into normal CSS, and wanted to avoid having unnecessary dependencies, so I decided to stick with normal CSS.


## Other sources
- The image was generated using the Midjourney bot [direct link to image ](https://www.midjourney.com/jobs/04387c01-18da-490b-a542-b6e0e56ee27e?index=0)
- the same image was used for the favicon to the page, but as an SVG file ( `/public/icon.svg`), located in  `/index.html`
- custom font used: [Comfortaa]( https://fonts.google.com/specimen/Comfortaa)


