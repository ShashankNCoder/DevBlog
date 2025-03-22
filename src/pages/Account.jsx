import React from 'react';
import { Container } from '../components';
import { useSelector } from 'react-redux';

function Account() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="py-8 ">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Account Settings</h1>
            
            {userData ? (
              <div className="space-y-8">
                <section className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                    <span className="mr-2">Profile Information</span>
                    <button className="ml-auto text-sm px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors">
                      Edit Profile
                    </button>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                      <input
                        type="text"
                        defaultValue={userData.name}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                      <input
                        type="email"
                        defaultValue={userData.email}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        disabled
                      />
                    </div>
                  </div>
                </section>

                <section className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Account Security</h2>
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Password</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Change your password to keep your account secure</p>
                      <button 
                        className="w-full sm:w-auto px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
                        onClick={() => alert('Password change functionality coming soon!')}
                      >
                        Change Password
                      </button>
                    </div>
                    
                    <div className="flex flex-col space-y-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
                      <button 
                        className="w-full sm:w-auto px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
                        onClick={() => alert('2FA setup coming soon!')}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </section>

                <section className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Preferences</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your account</p>
                      </div>
                      <button 
                        className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors flex items-center"
                        onClick={() => alert('Notification settings coming soon!')}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Configure
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div className="text-center py-12 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-lg border border-white/30 dark:border-gray-700/30">
                <p className="text-xl text-gray-600 dark:text-gray-400">Please log in to view your account settings.</p>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent dark:from-primary-400/10 rounded-xl pointer-events-none"></div>
        </div>
      </Container>
    </div>
  );
}

export default Account;