FactoryBot.define do
  factory :task do
    name { 'テストを書く' }
    description { 'RSpecなどを準備する' }
    user
  end
end