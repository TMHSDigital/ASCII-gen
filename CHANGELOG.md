# Changelog

## [1.2.0] - 2023-10-19

### Added
- **Security**: Added `rel="noopener noreferrer"` to external links.
- **Accessibility**: Improved aria-labels and aria-live attributes for better screen reader support.

### Changed
- **Code Organization**: Improved JavaScript code structure for better readability and maintainability.
- **Layout**: Removed duplicate "Generate" button and organized buttons using flexbox.

## [1.1.0] - 2023-10-19

### Added
- **Dark Mode**: Added a toggle button to switch between light and dark themes.
- **Export as Image**: Users can now export ASCII art as a PNG image using `html2canvas`.
- **Social Sharing**: Added a share button to allow users to share their ASCII art using the Web Share API.
- **Font Preview**: Display a preview of the selected font style.
- **Character Counter**: Added a character counter to track input length.
- **Tooltips**: Added tooltips to buttons for better user guidance.

### Changed
- **UI Enhancements**: Improved the overall styling with animations and responsive design.
- **Accessibility**: Enhanced accessibility with `aria-live` attributes for dynamic content updates.

### Fixed
- **Clipboard Copy**: Improved feedback when ASCII art is copied to the clipboard.

## [1.0.0] - 2023-10-19

### Added
- **Initial Release**: Basic ASCII art generation using the `figlet` library.
- **Font Selection**: Users can choose from a variety of fonts.
- **Copy to Clipboard**: Users can copy the generated ASCII art to the clipboard.
