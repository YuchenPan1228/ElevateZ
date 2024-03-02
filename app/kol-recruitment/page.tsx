'use client'

import React, { useState } from 'react';

const KolRecruitmentPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        ageGrade: '',
        joinType: '',
        contact: '',
        schoolOrWork: '',
        details: '',
        goals: '',
    });
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  
        try {
            const response = await fetch('/api/submitApplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (data.success) {
                console.log('Application submitted successfully!');
            } else {
                console.error('Error submitting application:', data.error);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

  return (
    <div className="bg-black text-white min-h-screen p-8"> 
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">KOL招募</h1>
        <p className="text-lg mb-8">欢迎申请成为我们的KOL！请填写下面的申请表格。</p>

        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28"><form onSubmit={handleSubmit} className="space-y-12">
        {/* Basic Information */}
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">个人信息</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">请提供以下信息以完成申请。</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        1. 姓名：
                        <br />
                        <input type="text" name="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </label>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                        2. 性别：
                        <br />
                        <select name="gender" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                    </label>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="ageGrade" className="block text-sm font-medium leading-6 text-gray-900">
                        3. 年龄/就读年级：
                        <br />
                        <input type="text" name="ageGrade" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </label>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="joinType" className="block text-sm font-medium leading-6 text-gray-900">
                        4. 以个人加入还是组织加入：
                        <br />
                        <select
                            name="joinType"
                            value={formData.joinType}
                            onChange={(e) => setFormData({ ...formData, joinType: e.target.value })}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="">选择加入类型</option>
                            <option value="individual">个人</option>
                            <option value="organization">组织</option>
                        </select>
                    </label>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                        5. 联系方式（微信号/手机号）：
                        <br />
                        <input type="text" name="contact" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </label>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="schoolOrWork" className="block text-sm font-medium leading-6 text-gray-900">
                        6. 就读学校/工作单位：
                        <br />
                        <input type="text" name="schoolOrWork" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </label>
                </div>

                {/* Individual-specific Questions */}
                {formData.joinType === 'individual' && (
                    <div className="col-span-full">
                        <label htmlFor="individualDetails" className="block text-sm font-medium leading-6 text-gray-900">
                            7. 请介绍自媒体账号粉丝量、内容、受众，或社群影响力范围、类型、受众，计划推广模式，以及其它相关信息：
                            <br />
                            <textarea name="individualDetails" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </label>
                    </div>
                )}

                {/* Organization-specific Questions */}
                {formData.joinType === 'organization' && (
                    <div className="col-span-full">
                        <label htmlFor="organizationDetails" className="block text-sm font-medium leading-6 text-gray-900">
                            7. 请简单介绍组织类型，影响力范围、受众，以及计划的推广模式：
                            <br />
                            <textarea name="organizationDetails" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </label>
                    </div>
                )}

                {/* Common Question for Both */}
                <div className="col-span-full">
                    <label htmlFor="goals" className="block text-sm font-medium leading-6 text-gray-900">
                        8. 加入ElevateZ KOL计划想获得什么：
                        <br />
                        <textarea name="goals" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </label>
                </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
                type="button"
                className="py-2 px-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl text-sm font-bold"
            >
                取消
            </button>
            <button
                type="submit"
                className="py-2 px-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl text-sm font-bold"
            >
                提交申请
            </button>
        </div>
    </form></section>

    </div>
  );
};

export default KolRecruitmentPage;