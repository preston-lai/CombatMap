# BJJ Gym Finder

A modern platform designed to help both beginners and veterans find and connect with Brazilian Jiu-Jitsu (BJJ) gyms in Vancouver. Our mission is to make the process of finding and joining a BJJ gym as seamless as possible.

## 🎯 Core Features (MVP)

### 1. Gym Discovery & Information
- Interactive map showing BJJ gym locations in Vancouver
- Detailed gym information cards including:
  - Name and location
  - Price ranges (monthly/annual)
  - Class schedules
  - Trial class availability
  - Contact information
  - Basic amenities (showers, parking, etc.)
  - Belt system/affiliation

### 2. Trial Class Booking System
- Streamlined booking flow for trial classes
- Comprehensive pre-trial checklist:
  - What to bring (gi/no-gi options)
  - What to wear
  - Basic etiquette guidelines
  - Health waiver
- Automated confirmation emails with essential information

### 3. Waitlist System
- Email collection for future features
- Basic information collection:
  - Name
  - Email
  - Experience level
  - Preferred location
  - Training interests

## 🛠️ Technical Stack

- **Frontend**: Next.js 15.3.2 with React 19
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Maps**: Leaflet/React-Leaflet
- **Icons**: Lucide React
- **Authentication**: NextAuth.js (planned)
- **Database**: PostgreSQL (planned)
- **Email**: SendGrid (planned)
- **Hosting**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bjj-gym-finder.git
cd bjj-gym-finder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bjj-gym-finder/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Features.tsx
│   │   ├── lib/
│   │   ├── types/
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   └── styles/
├── public/
└── package.json
```

## 🔄 User Flow

### First-time Visitor
1. Land on homepage with map view
2. Search by location or browse map
3. Click on gym to see details
4. Option to book trial or join waitlist
5. Simple onboarding process

### Trial Booking Flow
1. Select gym
2. Choose trial class time
3. Fill basic information
4. Receive confirmation email with:
   - What to bring
   - What to wear
   - Basic etiquette
   - Location details
   - Contact information

## 📊 MVP Success Metrics

- Number of trial class bookings
- Waitlist signups
- User engagement with map
- Email open rates
- Conversion rate from trial to membership

## 🔮 Future Enhancements

1. User reviews and ratings
2. Advanced filtering (by belt level, competition focus, etc.)
3. Direct membership signup
4. Class schedule integration
5. Mobile app
6. Community features

## 💡 Key Differentiators

- Focus on beginner-friendly information
- Clear pricing transparency
- Comprehensive trial class preparation
- Easy-to-use interface
- Local focus on Vancouver market

## 🚀 Launch Strategy

1. Soft launch with 5-10 key Vancouver gyms
2. Gather feedback from both gyms and users
3. Iterate based on real usage data
4. Expand to more gyms
5. Add features based on user demand

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Project Lead
- [Other Team Members]

## 📞 Contact

For any questions or suggestions, please reach out to [your-email@example.com]
